import * as React from 'react';
import styled from '~/styled';
import SearchImage from '../../assets/img/main-search.png?url';
import CustomIcon from '../CustomIcon';

export default () => {
  return (
    <Wrapper>
      <StyledInput placeholder='해시태그로 검색하기..' />
      <StyledCustomIcon url={SearchImage} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 18px;
  border: solid 2px ${(props) => props.theme.searchBarColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  font-size: 16px;
  margin: 16px 19px 16px 19px;
  flex-grow: 8.5;
`;

const StyledCustomIcon = styled(CustomIcon)`
    flex-grow: 1.5;
`;