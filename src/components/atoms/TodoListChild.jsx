import React from 'react'
import { Tbody, Tr, Td, Button, Select } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useRecoilState } from 'recoil'
import { todoState } from '../../hooks/TodoState'
import { todoStatus } from '../atoms/status/todoStatus'
import { todoPriority } from '../atoms/status/todoPriority'

const TodoListChild = () => {
  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)
  return (
    <Tbody>
      {todos.map((todo) => (
        <Tr key={todo.id}>
          <Td fontSize="16px" fontWeight="bold">
            {todo.title}
          </Td>
          <Td>
            <todoStatus />
            {/* <Button rounded="full" bg="green.50" size="lg" fontSize="12px">
              {todo.status}
            </Button> */}
          </Td>
          <Td>
            <todoPriority />
            {/* <Select borderColor="tomato" fontSize="16px">
              <option>High</option>
              <option>Middle</option>
              <option>Low</option>
            </Select> */}
          </Td>
          <Td fontSize="14px">{todo.created_day}</Td>
          <Td fontSize="14px">2020-11-8 18:55</Td>
          <Td>
            <EditIcon w={18} h={18} me={5} />
            <DeleteIcon w={18} h={18} />
          </Td>
        </Tr>
      ))}
    </Tbody>
  )
}

export default TodoListChild
