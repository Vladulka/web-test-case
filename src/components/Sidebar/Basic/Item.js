import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 10px;
  cursor: pointer;
  transition: width 0.4s ease-in-out, background-color 0.4s ease-in-out, border-color 0.4s ease-in-out;
  transform: translateZ(0);
  will-change: transform, width, opacity;
  position: relative;
  min-width: 40px;
  padding-right: ${({ isOpened }) => isOpened ? '160px' : '0'};;

  &:hover {
    background: ${({ color }) =>
    color === 'dark' ?
        'var(--color-sidebar-background-dark-hover)' :
        'var(--color-sidebar-background-light-hover)'};
    border-radius: 10px;
    color: ${({ color }) =>
    color === 'dark' ?
        'var(--color-text-dark-hover)' :
        'var(--color-text-light-hover)'};
  }

  &.active {
    background: ${({ color }) =>
    color === 'dark' ?
        'var(--color-sidebar-background-dark-active)' :
        'var(--color-sidebar-background-light-active)'};
    color: ${({ color }) =>
    color === 'dark' ?
        'var(--color-text-dark-active)' :
        'var(--color-text-light-active)'};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const TextWrapper = styled.span`
  opacity: ${({ isOpened }) => isOpened ? 1 : 0};
  transform: ${({ isOpened }) => isOpened ? 'translateX(0)' : 'translateX(20px)'};
  transform-origin: left;
  transition: opacity 0.3s ease, max-width 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  width: ${({ isOpened }) => isOpened ? 'auto' : '0'};
  flex-shrink: 0;
  max-width: 150px;
  position: absolute;
  top: ${({ isOpened }) => !isOpened ? 0 : ''};
  left: 45px;
`;
