export const ParentComponent = () => {
    return (<>
        <h1>Hello i am Parent Component</h1>
        <ChildComponent data='I love Web Developement This is My Paassion' />
    </>)
}

const ChildComponent = (props)=>{
    return(<>
    <h1>Hello i am Child Component</h1>
    <GrandChildComponent data={props.data} />
    </>)
}

const GrandChildComponent = (props)=>{
    return(<>
    <h1>Hello i am GrandChild Component</h1>
    <GrandGrandChildComponent data={props.data} />
    </>)
}

const GrandGrandChildComponent = (props)=>{
    return(<>
    <h1>Hello i am GrandGrandChild Component</h1>
    <h6>{props.data}</h6>
    </>)
}