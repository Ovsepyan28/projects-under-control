import { FC, useState } from "react";
import { DragDropContext, DraggableLocation, DropResult } from "react-beautiful-dnd";

import { Board as BoardType, Project } from "../../types";

import { Column } from "../Column";

import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { setProject } from "../../redux/reducers/projects/actions";

import "./styles.sass";

interface Props {
    project: Project;
}

export const Board: FC<Props> = ({ project }) => {
    const [columns, setColumns] = useState<BoardType>(project.columns);
    const dispatch = useAppDispatch();

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const source: DraggableLocation = result.source;
        const destination: DraggableLocation = result.destination;

        if (source.droppableId === destination.droppableId) {
            // Перемещение элемента внутри одной колонки
            const column = columns[source.droppableId as keyof BoardType];
            const newTasks = Array.from(column.tasks);
            const [movedTask] = newTasks.splice(source.index, 1);
            newTasks.splice(destination.index, 0, movedTask);
            dispatch(
                setProject({
                    projectId: project.projectId,
                    projectName: project.projectName,
                    columns: { ...columns, [source.droppableId]: { ...column, tasks: newTasks } },
                })
            );
            setColumns({ ...columns, [source.droppableId]: { ...column, tasks: newTasks } });
        } else {
            // Перемещение элемента между колонками
            const sourceColumn = columns[source.droppableId as keyof BoardType];
            const destinationColumn = columns[destination.droppableId as keyof BoardType];
            const sourceTasks = Array.from(sourceColumn.tasks);
            const destinationTasks = Array.from(destinationColumn.tasks);
            const [movedTask] = sourceTasks.splice(source.index, 1);
            destinationTasks.splice(destination.index, 0, movedTask);

            dispatch(
                setProject({
                    projectId: project.projectId,
                    projectName: project.projectName,
                    columns: {
                        ...columns,
                        [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
                        [destination.droppableId]: { ...destinationColumn, tasks: destinationTasks },
                    },
                })
            );
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
                        title={columns[columnId as keyof BoardType].title}
                        tasks={columns[columnId as keyof BoardType].tasks}
                        columnId={columnId as keyof BoardType}
                        projectId={project.projectId}
                    />
                ))}
            </div>
        </DragDropContext>
    );
};
