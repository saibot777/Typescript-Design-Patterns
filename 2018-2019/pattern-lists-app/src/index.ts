import { LinkedList } from "./LinkedList";

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-10);
linkedList.add(500);

linkedList.sort();
linkedList.print();