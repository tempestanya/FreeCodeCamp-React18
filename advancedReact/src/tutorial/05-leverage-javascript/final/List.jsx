import { people } from "../../../data";
import { Person } from "./Person";

const List = () => {
    return (
        <div>
            {people.map((person) => {
                return <Person {...person} key={person.id} />;
            })}
        </div>
    );
};
export default List;
