class C {
    no = 123;
    no = 'asdf';
    yes() {};
    async yes() {};
    yes = () => {};
    yes = x => {};
    yes = (a,b) => {};
    yes = async () => {};
    yes = async x => {};
    yes = async (a,b) => {};
    yes = () => someFn();
    yes = x => someFn(x);
    yes = (a,b) => someFn({ a, b });
    yes = _ => new Promise((res, rej) => {});
    yes = a => b => c;
    yes = (a,b) => c => someFn({ a, b, c });
}

const no = 123;
const no = 'asdf';
function yes() {};
async function yes() {};
const yes = () => {};
const yes = x => {};
const yes = (a,b) => {};
const yes = async () => {};
const yes = async x => {};
const yes = async (a,b) => {};
const yes = () => someFn();
const yes = x => someFn(x);
const yes = (a,b) => someFn({ a, b });
const yes = _ => new Promise((res, rej) => {});
const yes = a => b => c;
const yes = (a,b) => c => someFn({ a, b, c });

const obj = {
    no: 123,
    no: 'asdf',
    yes() {},
    async yes() {},
    yes: () => {},
    yes: x => {},
    yes: (a,b) => {},
    yes: async () => {},
    yes: async x => {},
    yes: async (a,b) => {},
    yes: () => someFn(),
    yes: x => someFn(x),
    yes: (a,b) => someFn({ a, b }),
    yes: _ => new Promise((res, rej):> {}),
    yes: a => b => c,
    yes: (a,b) => c => someFn({ a, b, c }),
    no: {
        no: 123,
        no: 'asdf',
        yes() {},
        async yes() {},
        yes: () => {},
        yes: x => {},
        yes: (a,b) => {},
        yes: async () => {},
        yes: async x => {},
        yes: async (a,b) => {},
        yes: () => someFn(),
        yes: x => someFn(x),
        yes: (a,b) => someFn({ a, b }),
        yes: _ => new Promise((res, rej):> {}),
        yes: a => b => c,
        yes: (a,b) => c => someFn({ a, b, c }),
    }
}
