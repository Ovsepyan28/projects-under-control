import { FC, useState } from "react";
import { DragDropContext, DraggableLocation, DropResult } from "react-beautiful-dnd";

import { State } from "../../types";

import { Column } from "../Column";

import "./styles.sass";

interface Props {
    state: State;
}

export const Board: FC<Props> = ({ state }) => {
    const [columns, setColumns] = useState<State>(state);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const source: DraggableLocation = result.source;
        const destination: DraggableLocation = result.destination;

        if (source.droppableId === destination.droppableId) {
            // Перемещение элемента внутри одной колонки
            const column = columns[source.droppableId as keyof State];
            const newTasks = Array.from(column.tasks);
            const [movedTask] = newTasks.splice(source.index, 1);
            newTasks.splice(destination.index, 0, movedTask);
            setColumns({ ...columns, [source.droppableId]: { ...column, tasks: newTasks } });
        } else {
            // Перемещение элемента между колонками
            const sourceColumn = columns[source.droppableId as keyof State];
            const destinationColumn = columns[destination.droppableId as keyof State];
            const sourceTasks = Array.from(sourceColumn.tasks);
            const destinationTasks = Array.from(destinationColumn.tasks);
            const [movedTask] = sourceTasks.splice(source.index, 1);
            destinationTasks.splice(destination.index, 0, movedTask);

            setColumns({
                ...columns,
                [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
                [destination.droppableId]: { ...destinationColumn, tasks: destinationTasks },
            });
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="board">
                {Object.keys(columns).map((columnId) => (
                    <Column
                        key={columnId}
                        title={columns[columnId as keyof State].title}
                        tasks={columns[columnId as keyof State].tasks}
                        columnId={columnId}
                    />
                ))}
            </div>
        </DragDropContext>
    );
};
