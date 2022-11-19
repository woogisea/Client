import styled from 'styled-components';
import { theme } from '../styles/theme.js';
import searchIcon from '../assets/icon/icon_search.svg';

export default function HomeBtn() {
  return (
    <HomeSearchBtn type="button">
      <HomeSearchIcon src={searchIcon} alt="검색 버튼 이미지" />
    </HomeSearchBtn>
  );
}

const HomeSearchBtn = styled.button`
  width: 44px;
  height: 44px;

  background-color: ${theme.colors.jemminiRed};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${theme.radius.radius};

  margin-left: 8px;
`;

const HomeSearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;
