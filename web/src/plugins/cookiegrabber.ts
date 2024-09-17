class LocalStorageHandler {
    getStorage(name:string):string[] {}
    setStorage(name:string, data:string, duration:string):void {}

    /**
     * returns boolean about if a specifiec datapoint was set in localstorage or not
     * @param name the name of the item looked for
     * @author Maurice Fletgen
     */
    isSetInStorage (name:string):boolean {
        if (localStorage.getItem(name)) {
            return true;
        }

        return false;
    }
}