
import { SlLocationPin } from "react-icons/sl";

export default function SearchBox({ setToggleModal }) {


    return (
        <>
            <button className="btn" onClick={() => setToggleModal(true)}>
                <SlLocationPin size={24} />
                <span className="ml-2">Change Location</span>
            </button>
        </>
    )
}
