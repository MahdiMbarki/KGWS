import { BiArrowToTop } from 'react-icons/bi';
import { useEffect, useState } from "react";
import './BackToTopButton.css';
function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='ScrollDiv'>
            {backToTopButton && (
                <BiArrowToTop className='ScrollToTopButton' onClick={scrollUp} />
            )}

        </div>
    );
}
export default BackToTopButton;