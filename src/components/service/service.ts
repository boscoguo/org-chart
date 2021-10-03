import { Subject } from "rxjs";

const subject1 = new Subject();

export const dragNodeService = {
  sendDragInfo: (id:string) => subject1.next({ draggedNodeId: id }),
  clearDragInfo: () => subject1.next(undefined),
  getDragInfo: () => subject1.asObservable()
};
