import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const ProfileDescription = styled.div`
  max-width: 600px;
  width: 100%;
  height: 600px;
  padding: 0 10px;

  img {
    margin-left: 150px;
    align-self: center;
    width: 350px;
  }

  div {
    border: 1px solid var(--purple-400);
    position: relative;
    top: -155px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;

    h2 {
      margin-bottom: 10px;
      border-bottom: 1px solid var(--gray-50);
    }
  }
`;

export const ProfileData = styled.div`
  padding: 30px;
  background-color: var(--gray-800);
  border-radius: 8px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 12%);

  div {
    h3 {
      text-transform: uppercase;
      color: var(--purple-400);
      margin-bottom: 85px;
    }

    ul {
      list-style: none;

      li {
        border: 1px solid var(--gray-50);
        background: rgba(0, 0, 0, 0.3);
        padding: 10px;
        border-radius: 8px;
        transition: transform 0.2s;

        &:hover {
          transform: translateX(10px);
        }

        & + li {
          margin-top: 10px;
        }
      }
    }
  }

  a {
    width: 200px;
    text-align: center;
    text-decoration: none;
    color: var(--white);
    background: var(--purple-400);
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 10px;
    margin-top: 30px;

    display: block;
  }
`;
