import TypeCall from './TypeCall';

export default function Type(props) {
    const calls = props.calls.map(call => (
        <TypeCall
            key={call.id}
            data={call}
        />
    ));
    
    return (
        <section className='type'>
            <h2 className='type__title'>{props.title}</h2>
            <section className='type__calls'>
                {calls}
            </section>
        </section>
    );
}