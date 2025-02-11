import { useEffect, useState } from "react";
import style from "./FavoriteButton.module.css";
import {
  getFavoriteById,
  toggleFavoriteInLocalStorage,
} from "../../../utils/localstorage";

type FavoriteButtonProps = {
  id: string;
  talk: string;
};

export const FavoriteButton = ({ id, talk }: FavoriteButtonProps) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  useEffect(() => {
    setIsFavorited(getFavoriteById(id));
  }, []);

  function toggleFavorite() {
    toggleFavoriteInLocalStorage(id);
    setIsFavorited(!isFavorited);
  }

  //TODO: Should have a aria checked if favorited
  return (
    <button
      aria-label={`Favorite talk: ${talk}`}
      className={style.favorite_button}
      onClick={toggleFavorite}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="28"
        viewBox="0 0 30 28"
        fill="none"
      >
        <g clipPath="url(#clip0_8197_93903)">
          <path
            d="M28.9744 4.10999C28.2966 2.82748 27.3541 1.82337 26.1492 1.09311C24.9671 0.36513 23.6229 0 22.1168 0C20.3071 0 18.7873 0.45413 17.5549 1.35783C16.35 2.26152 15.4965 3.20402 14.9922 4.1853C14.465 3.20402 13.5978 2.26152 12.3929 1.35783C11.1857 0.45413 9.67954 0 7.86987 0C6.36143 0 5.00588 0.36513 3.79867 1.09311C2.61884 1.82337 1.69004 2.82748 1.00999 4.10999C0.332215 5.39023 -0.0078125 6.83478 -0.0078125 8.44363C-0.0078125 10.6047 0.608345 12.7271 1.84066 14.8129C3.09579 16.8987 4.80506 18.9457 6.96617 20.9562C9.12729 22.9667 11.8019 25.1506 14.9922 27.5125C18.1848 25.1757 20.8594 23.0032 23.0205 20.9927C25.1816 18.9571 26.8772 16.8987 28.1095 14.8129C29.3646 12.7271 29.9922 10.6047 29.9922 8.44363C29.9922 6.83478 29.6544 5.39023 28.9744 4.10999ZM25.7339 13.5691C24.8051 15.2008 23.5225 16.7983 21.8909 18.3546C20.2569 19.9133 18.1095 21.7481 15.4463 23.8567L14.9922 24.1967C12.1784 21.9854 9.93057 20.1004 8.24641 18.544C6.58963 16.9603 5.26832 15.34 4.28931 13.681C3.33541 11.9991 2.85846 10.2396 2.85846 8.40484C2.85846 7.30032 3.05928 6.31903 3.46092 5.46554C3.86257 4.61205 4.42852 3.9571 5.1565 3.50525C5.90958 3.0534 6.79045 2.82748 7.79456 2.82748C8.84887 2.82748 9.80506 3.0785 10.6586 3.58056C11.5394 4.05979 12.3176 4.72387 12.9954 5.57964C13.6732 6.43314 14.3395 7.51255 14.9922 8.82017C15.6471 7.51255 16.3112 6.43314 16.9913 5.57964C17.669 4.72387 18.4358 4.05979 19.2893 3.58056C20.1679 3.0785 21.1355 2.82748 22.1921 2.82748C23.6983 2.82748 24.8918 3.32953 25.7727 4.33592C26.6763 5.34003 27.1282 6.69785 27.1282 8.40484C27.1282 10.2145 26.6649 11.9352 25.7339 13.5691Z"
            fill="#2D2D2D"
          />
          <path
            d="M27.1291 8.40549C27.1291 10.2152 26.6659 11.9358 25.7348 13.5698C24.806 15.2015 23.5235 16.7989 21.8918 18.3553C20.2578 19.9139 18.1104 21.7487 15.4472 23.8573L14.9931 24.1974C12.1793 21.986 9.93149 20.1011 8.24732 18.5447C6.59055 16.9609 5.26923 15.3407 4.29023 13.6816C3.33633 11.9997 2.85938 10.2403 2.85938 8.40549C2.85938 7.30097 3.0602 6.31968 3.46184 5.46619C3.86348 4.6127 4.42943 3.95775 5.15741 3.5059C5.91049 3.05405 6.79137 2.82812 7.79548 2.82812C8.84979 2.82812 9.80597 3.07915 10.6595 3.58121C11.5403 4.06044 12.3185 4.72452 12.9963 5.58029C13.6741 6.43378 14.3404 7.5132 14.9931 8.82082C15.6481 7.5132 16.3121 6.43378 16.9922 5.58029C17.67 4.72452 18.4367 4.06044 19.2902 3.58121C20.1688 3.07915 21.1364 2.82812 22.193 2.82812C23.6992 2.82812 24.8927 3.33018 25.7736 4.33657C26.6773 5.34068 27.1291 6.6985 27.1291 8.40549Z"
            className={
              isFavorited
                ? style.favorite_button__red
                : style.favorite_button__inherit
            }
          />
        </g>
        <defs>
          <clipPath id="clip0_8197_93903">
            <rect width="30" height="27.5125" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};
