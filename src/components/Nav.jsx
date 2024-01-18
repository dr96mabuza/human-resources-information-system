export default function Nav({name, link}) {
    return (
        <div id="nav">
            <nav>
                <a href="/addresses">Addresses</a>
                <a href="/contacts">Contacts</a>
                <a href="/compensations">Compensations</a>
                <a href="/documents">Documents</a> 
                <a href="/employees">Employees</a>
                <a href="/employmentdetails">job details</a>
                <a href="/leaves">Time off</a>
            </nav>
            {!name && !link? (<></>) : (<a href={link}><button type="submit">{name}</button></a>)}
        </div>

    );
}