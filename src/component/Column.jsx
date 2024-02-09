/* eslint-disable react/prop-types */
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";

const Column = ({ task, title, refetch, provided }) => {
    return (
        <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="rounded w-[280px] h-[530px] flex flex-col overflow-y-auto"
        >
            <div className="text-center h-[60px] rounded-t-md px-3 bg-blue-400 flex items-center justify-center">
                <p className="text-xl font-semibold">{title}</p>
            </div>
            <div className="px-2 flex flex-1 flex-col text-blue-500 border-b-2 border-x-2 shadow-lg shadow-blue-400 rounded-b-md overflow-y-auto">
                {task &&
                    task.map((item, index) => (
                        <Draggable key={item._id} draggableId={item._id} index={index}>
                            {(provided) => (
                                <Card
                                    provided={provided}
                                    refetch={refetch}
                                    key={item._id}
                                    item={item}
                                />
                            )}
                        </Draggable>
                    ))}
            </div>
            {provided.placeholder}
        </div>
    );
};

export default Column;