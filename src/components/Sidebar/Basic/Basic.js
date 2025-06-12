import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${({ isOpened }) => (isOpened ? '250px' : '56px')};
  height: calc(100vh - 52px);
  border: 2px solid ${({ color }) =>
          color === 'dark' ?
                  'var(--color-sidebar-background-dark-active)' :
                  'var(--color-sidebar-background-light-default)'};
  border-radius: 10px;
  background: ${({ color }) =>
    color === 'dark' ?
        'var(--color-sidebar-background-dark-default)' :
        'var(--color-sidebar-background-light-default)'};
  color: ${({ color }) =>
    color === 'dark' ?
        'var(--color-text-dark-default)' :
        'var(--color-text-light-default)'};
  transition: width 0.3s ease, background-color 0.3s, border-color 0.3s;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateX(0);
  transition: transform 0.3s ease, width 0.3s ease;
  will-change: transform, width;
` ;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: start;
    border-radius: 10px;
    cursor: pointer;
    transition: width 0.4s ease-in-out, background-color 0.4s ease-in-out, border-color 0.4s ease-in-out;
    transform: translateZ(0);
    will-change: transform, width, opacity;
    position: relative;
    padding-right: ${({isOpened}) => isOpened ? '160px' : '0'};
  }

  span {
    font-weight: bold;
    font-size: 18px;
    opacity: ${({isOpened}) => isOpened ? 1 : 0};
    transform: ${({isOpened}) => isOpened ? 'translateX(0)' : 'translateX(20px)'};
    transform-origin: left;
    transition: opacity 0.3s ease, max-width 0.3s ease;
    overflow: hidden;
    white-space: nowrap;
    width: ${({isOpened}) => isOpened ? 'auto' : '0'};
    flex-shrink: 0;
    max-width: 150px;
    position: absolute;
    top: ${({isOpened}) => !isOpened ? 0 : ''};
    left: 65px;
    color: ${({color}) =>
            color === 'dark' ?
                    'var(--color-text-logo-dark-default)' :
                    'var(--color-text-logo-light-default)'};
  }
`;

export const ToggleButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: top 0.3s;
  position: absolute;
  background-color: ${(props) =>
          props.color === 'dark' ?
                  props.isOpened 
                          ? 'var(--color-button-background-dark-active)' 
                          : 'var(--color-button-background-dark-default)'
                  : props.isOpened
                          ? 'var(--color-button-background-light-active)'
                          : 'var(--color-button-background-light-default)'
        };
  right: ${({isOpened}) =>
          isOpened ?
                  '-15px' :
                  '-50px'};

  &:hover {
    background-color: ${(props) =>
        props.color === 'dark' ?
            props.isOpened
                ? 'var(--color-button-background-dark-default)'
                : 'var(--color-button-background-dark-active)'
            : props.isOpened
            ? 'var(--color-button-background-light-default)'
            : 'var(--color-button-background-light-active)'
    };
  }
`;
