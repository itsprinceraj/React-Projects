

function Dates(){

    let date = new Date()

    return (
        <>
          <p>Current Date: {date.toLocaleDateString()}</p>
        </>
    )
}

export default Dates;