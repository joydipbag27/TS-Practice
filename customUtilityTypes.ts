type user = {
  name: string;
  age?: number;
  password: string;
  dead: undefined;
} & {};

type PartialByKeys<T, K extends keyof T> = {
  [L in keyof (Omit<T, K> & Partial<Pick<T, K>>)]: T[L];
};

type a = PartialByKeys<user, "age" | "name">;

type RequiredByKeys<T, K extends keyof T> = {
  [L in keyof (Omit<T, K> & Required<Pick<T, K>>)]: T[L];
};

type b = RequiredByKeys<user, "age">;

type ReadonlyByKeys<T, K extends keyof T> = {
  [L in keyof (Omit<T, K> & Readonly<Pick<T, K>>)]: T[L];
};

type c = ReadonlyByKeys<user, "password" | "age">;

type NonNullableProperties<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

type d = NonNullableProperties<user>;

type KeysOfType<T, ValueType> = {
  [K in keyof T]-?: T[K] extends ValueType ? K : never;
}[keyof T];

type e = KeysOfType<user, string>;

type PickByValue<T, ValueType> = Pick<T, KeysOfType<T, ValueType>>;

type f = PickByValue<user, string>;


type User = {
    name: string;
    age: number;
} 

type Address = {
    city: string;
    country: string;
}

type Prettify<T> = {
  [K in keyof T]: T[K]
}

type CleanType = Prettify<User & Address>;


type user2 = {
  name: "heroalom",
  age: number,
  address: {
    city: "kolkata",
    state: "westbengal",
    jcob: {
      hh: 7
    }
  }
} & {}

type DeepPartial<T> = {
  [K in keyof T]? : T[K] extends object ? DeepPartial<T[K]> : T[K]
}

type g = DeepPartial<user2 >
type DeepReadOnly<T> = {
  readonly[K in keyof T] : T[K] extends object ? DeepReadOnly<T[K]> : T[K]
}

type h = DeepReadOnly<user2 >

