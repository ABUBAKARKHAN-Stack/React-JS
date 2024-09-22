export const Practice = () => {
    const students = ['ANAS']
    return (<>
        <h1 className="text-3xl text-center h-full w-full">InterView</h1>
        <p>{students.length || "No Student Found"}</p>
        <p>Number Of Students : {students.length}</p>
    </>
    )
}