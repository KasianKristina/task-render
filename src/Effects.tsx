import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

export function Effects(props: { sourceId: string }) {
    let [name, setName] = useState(props.sourceId);
    let [last_message, setLast_Message] = useState(-1);
    let callback = (newMessage: number) => {
        return setLast_Message(newMessage);
    };

    useEffect(() => {
        subscribe(props.sourceId, callback);
        setName(props.sourceId);
        setLast_Message(-1);
        return () => {
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);
    return (
        <div>
            {name}: {last_message}
        </div>
    );
}
