import './admin-component.css'

export default function AdminComponent(){
    return(
        <div className="admin-container">
            <ul className='admin-component-list'>
                <li className='admin-list'><a href="/configUser">My information</a></li>
                <li className='admin-list'><a href="/configUser">My loans</a></li>
            </ul>
        </div>
    );
}