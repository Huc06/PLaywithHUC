import { FC } from 'react';

interface ImageProps {
    link: string;
    className?: string;
}

const Image: FC<ImageProps> = ({ link, className }) => {
    return (
        <img src={link} alt="image" width={400} height={500} className={className} />
    );
}

export default Image;