import configureStore from "./store/configureStore";
import { loadBugs, bugAdd, assignBugToUser } from "./store/bugs";
const store = configureStore();
store.dispatch(loadBugs());
setTimeout(() => store.dispatch(assignBugToUser(3, 1)), 5000);
