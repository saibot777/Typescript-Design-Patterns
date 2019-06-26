import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-10);
linkedList.add(500);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();