import styled from "styled-components";

export const TaskStatus = styled.a`
  // font-weight: ${(props) => props.activeFilter ? 'bold' : 'normal'};
  font-weight: ${({activeFilter}) => activeFilter ? 'bold' : 'normal'};
`;

// Styled-A1 - Se for passada a props taskCompleted a task vai ficar riscada. Dando impressão de que foi concluída.
export const TaskName = styled.li`
 text-decoration: ${({taskCompleted}) =>taskCompleted ? 'line-through' : 'none'};
`;