import React, {useContext} from 'react'
import './Header.css';
import { TodoContext } from './TodoStore.js';

const Header = () => {
  const {todos} = useContext(TodoContext);
  return (
          <>
            <h1>HELLO TODO 애플리케이션</h1>
            <div className="countInfo">
              해야할일 ! {todos.filter(v => v.status === "todo").length}개가 있습니다
            </div>
          </>
  )
}

export default Header


/**
 * useContext를 쓰기 이전의 문법 -> 상당히 복잡하다.
 * 껍데기 컴포넌트를 만들어서 썻어야 하는데 이를 간단하게 처리 가능
 <TodoContext.Consumer>
    {
        ({todos}) => (
            <>
                <h1>HELLO TODO 애플리케이션</h1>
                <div className='countInfo'>
                    해야할일 ! {todos.filter(v => v.status==='todo').length}개가 있습니다.
                </div>
            </>
        )
    }
</TodoContext.Consumer>
 */