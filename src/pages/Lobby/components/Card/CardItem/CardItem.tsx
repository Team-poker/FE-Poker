import React, {useState} from 'react';
import './CardItem.scss';

export interface ItemProps {
    title: string,
    count: number,
    image: string,
    storyPoint: string
}

const CardItem = ({image, title } : ItemProps) => {
    const [newTitle, setNewTitle] = useState({title});
    const [isEditing, setIsEditing] = useState(false);
    const [enteredValue, setEnteredValue] = useState(newTitle);
    const handleTitleEdit = () => {
        setIsEditing(true);
    };

    const handleTitleInput = (e: any) => {
        const editTitle = e.target.value;
        setEnteredValue(editTitle);
    };

    const handleTitleConfirm = (e: any) => {
        e.preventDefault();
        setNewTitle(enteredValue);
        setIsEditing(false);
    };

    const handleTitleReset = (e: any) => {
        e.preventDefault();
        setIsEditing(false);
        setEnteredValue(newTitle);
    };
    return (
        <>
        <div className="card-item">
            {!isEditing && (
                <>
                <div className="title-card">{title}
                    <div className="pen-card" onClick={handleTitleEdit}/>
                </div>
                <div className="main-card">{image}</div>
                    <div className="revert-card">{title}</div>
                <div className="sp-card">{image}</div>
                </>
            )}
            {isEditing && (
                <form
                    className="edit-title-form"
                    onSubmit={handleTitleConfirm}
                    onReset={handleTitleReset}
                >
                    <input
                        type="text"
                        value={enteredValue}
                        autoFocus
                        onChange={handleTitleInput}
                    />
                    <button type="submit" className="confirm-title">
                    </button>
                    <button type="reset" className="reset-title">
                    </button>
                </form>
            )}
        </div>
        </>
    );
};

export default CardItem;