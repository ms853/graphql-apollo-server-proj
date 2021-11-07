import { Query, Resolver, Arg, Mutation } from 'type-graphql';
import { Todo, TodoInput } from '../schema/todo';

@Resolver((of) => Todo)
export class TodoResolver {

    private todos: Todo[] = [];

    @Query((returns) => [Todo], { nullable: true })
    async getTodos(): Promise<Todo[]> {
        return this.todos;
    }

    @Mutation((returns) => Todo)
        async addTodo(
            @Arg('todoInput') { title, description }: TodoInput
        ): Promise<Todo> {
            const todo = {
                id: Math.random(), // not really unique
                title,
                description,
                status: false,
            }

            await this.todos.push(todo)
            return todo
    }
    
}