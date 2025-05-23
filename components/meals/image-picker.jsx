'use client'

import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./image-picker.module.css"


export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState(null);
    const inputRef = useRef();
    function handlePickClick() {
        inputRef.current.click()
    }
    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file);
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}> {label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image chosen</p>}
                    {pickedImage && <Image src={pickedImage} alt="Image picket by user" fill />}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    accept="image/png, image/jpeg"
                    name="image"
                    id={name}
                    ref={inputRef}
                    onChange={handleImageChange}
                    required
                />
            </div>
            <button className={classes.button} type="button" onClick={handlePickClick}>Pick An Image</button>
        </div>
    );
}