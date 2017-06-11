let worker = null;

if (window.Worker) {
	worker = new Worker("logic_worker.js");
}

export default worker;