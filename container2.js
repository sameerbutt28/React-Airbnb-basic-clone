export default function Container1(proops){
    return(
        <div className="container2">
            <div className="contactcard">
                 <h3 className="contactname">{proops.name}</h3>
                <p className="phonenumber">{proops.phone}</p>
                <p className="emial">{proops.email}</p>
            </div>
        </div>
        

        )
}