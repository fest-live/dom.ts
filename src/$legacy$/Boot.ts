export class Boot {
    #preInit = new Set();
    #system = new Set();
    #booted = false;

    //
    constructor(system = [], preInit = []) {
        this.#booted = false;
        this.#system = new Set(system);
        this.#preInit = new Set(preInit);
    }

    //
    addSystem (module) { module.forEach((m)=>this.#system.add(m));  return this; }
    addPreInit(module) { module.forEach((m)=>this.#preInit.add(m)); return this; }
    async boot(options = {}) {
        this.#booted = true;
        const system = await Promise.allSettled(Array.from(this.#system.values()).map(async (module: any)=>{
            return (await module)?.default?.() ?? (await module)?.(options);
        }));
        const preInit = await Promise.allSettled(Array.from(this.#preInit.values()).map(async (module: any)=>{
            return (await module)?.default?.() ?? (await module)?.(options);
        }));
        return [system, preInit];
    }
}

//
let boot: Boot|null = null;
export const initBoot = (): Boot =>{ return (boot ??= new Boot()); }
export default initBoot;
