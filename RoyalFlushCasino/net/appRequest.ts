module dynomike.RoyalFlush {
    export class AppRequest {

        private _response: object;

        public retry() {
            //retry and after a few times I guess?
        }

        public getResponse(): object {
            return this._response;
        }

        //use this to generate a hash code which is a the secrety key for server requests.
        protected generateRequestHash(): string {
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
    }
}