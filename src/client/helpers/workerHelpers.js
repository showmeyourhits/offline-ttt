let worker = null;

if (window.Worker) {
	worker = new Worker("ttt_sw.js");
}

export default worker;