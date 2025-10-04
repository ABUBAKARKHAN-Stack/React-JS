import { useState, useEffect } from 'react';
import { useEffectEvent } from 'react';
import { showNotification } from './Nofitication';

const serverUrl = 'https://localhost:1234';



function ChatRoom({ roomId, theme }: { roomId: string, theme: string }) {

    const createConnection = (_serverUrl: string, _roomId: string) => {
        let connectedCallback: Function;
        let timeout: ReturnType<typeof setTimeout>;
        return {
            connect() {
                timeout = setTimeout(() => {
                    if (connectedCallback) {
                        connectedCallback();
                    }
                }, 100);
            },
            on(event: any, callback: any) {
                if (connectedCallback) {
                    throw Error('Cannot add the handler twice.');
                }
                if (event !== 'connected') {
                    throw Error('Only "connected" event is supported.');
                }
                connectedCallback = callback;
            },
            disconnect() {
                clearTimeout(timeout);
            }
        };
    }


    const onConnected = useEffectEvent(() => {
        showNotification('Connected!', theme);
    });

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.on('connected', () => {
            onConnected();
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return <h1>Welcome to the {roomId} room!</h1>
}

export default function UseEffectEventDemo() {
    const [roomId, setRoomId] = useState('general');
    const [isDark, setIsDark] = useState(false);
    return (
        <>
            <label>
                Choose the chat room:{' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                    className='text-white'
                >
                    <option
                        className='text-black'
                        value="general"
                    >
                        general
                    </option>
                    <option
                        className='text-black'
                        value="travel"
                    >
                        travel
                    </option>
                    <option className='text-black'
                        value="music">
                        music
                    </option>
                </select>
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Use dark theme
            </label>
            <hr />
            <ChatRoom
                roomId={roomId}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    );
}