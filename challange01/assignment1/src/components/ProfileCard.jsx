// import { Data } from "./ProfileData"
function Profile() {
    return (
        <div>
            <h1>Profile Card Challange</h1>
            <ProfileCard name='Alex'
                age={16}
                greeting={
                    <div>
                        <strong>
                            Hello Alex Keep Up The Great Work!
                        </strong>
                    </div>
                }
            >
                <p>Hobbies : Coding , Singing </p>
                <button> Contact</button>
            </ProfileCard>
            <ProfileCard name='Andrew Jack'
                age={46}
                greeting={
                    <div>
                        <strong>
                            Hello Andrew Jack Keep Up The Great Work!
                        </strong>
                    </div>
                }
            >
                <p>Hobbies : Coding , Body Building </p>
                <button> Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile;

function ProfileCard({name , age , greeting , children}) {
    //   const { name, age, greeting, children } = props;
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>{greeting}</p>
            <div>{children}</div>
        </>
    );
}






