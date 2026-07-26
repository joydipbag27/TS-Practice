type Num<
  N extends number,
  Result extends unknown[] = [],
> = Result["length"] extends N ? Result : Num<N, [0, ...Result]>;

type Add<N1 extends number, N2 extends number> = [
  ...Num<N1>,
  ...Num<N2>,
]["length"];

type Subtract<N1 extends number, N2 extends number> =
  Num<N1> extends [...Num<N2>, ...infer rest] ? rest["length"] : never;

type Multiply<
  N1 extends number,
  N2 extends number,
  Result extends unknown[] = [],
> = N2 extends 0
  ? Result["length"]
  : Multiply<N1, Subtract<N2, 1>, [...Result, ...Num<N1>]>;

type Increment<N1 extends number> = [...Num<N1>, ...Num<1>]["length"];
type Decrement<N1 extends number> =
  Num<N1> extends [...Num<1>, ...infer rest] ? rest["length"] : never;

type CheckEquality<N1 extends number, N2 extends number> =
  Num<N1> extends Num<N2> ? true : false;

type GT<N1 extends number, N2 extends number> =
  CheckEquality<N1, N2> extends true
    ? false
    : Subtract<N1, N2> extends never
      ? false
      : true;

type LT<N1 extends number, N2 extends number> =
  CheckEquality<N1, N2> extends true
    ? false
    : Subtract<N1, N2> extends never
      ? true
      : false;

type GTE<N1 extends number, N2 extends number> =
  Subtract<N1, N2> extends never ? false : true;

type LTE<N1 extends number, N2 extends number> =
  CheckEquality<N1, N2> extends true
    ? true
    : Subtract<N1, N2> extends never
      ? true
      : false;

type Divide<
  N1 extends number,
  N2 extends number,
  Count extends unknown[] = [],
> =
  Subtract<N1, N2> extends never
    ? Count["length"]
    : Divide<Subtract<N1, N2>, N2, [...Count, ...Num<1>]>;

type Modulo<N1 extends number, N2 extends number> =
  Subtract<N1, N2> extends never ? N1 : Modulo<Subtract<N1, N2>, N2>;

type Power<
  N1 extends number,
  N2 extends number,
  Result extends number = 1,
> = N2 extends 0 ? Result : Power<N1, Subtract<N2, 1>, Multiply<Result, N1>>;

type IsEven<N1 extends number> = Modulo<N1, 2> extends 0 ? true : false;
type IsOdd<N1 extends number> = Modulo<N1, 2> extends 0 ? false : true;

type Min<N1 extends number, N2 extends number> =
  GTE<N1, N2> extends true ? N2 : N1;
type Max<N1 extends number, N2 extends number> =
  GTE<N1, N2> extends false ? N2 : N1;

type total = Add<20, 30>;
type sub = Subtract<20, 20>;
type mul = Multiply<3, 2>;
type a = Increment<3>;
type b = Decrement<6>;
type c = CheckEquality<5, 5>;
type d = GT<5, 2>;
type e = LT<3, 4>;
type f = GTE<5, 3>;
type g = LTE<3, 4>;
type h = Divide<10, 3>;
type i = Modulo<7, 4>;
type j = Power<3, 3>;
type k = IsEven<2>;
type l = IsOdd<3>;
type m = Min<4, 2>;
type n = Min<1, 3>;


type Calculate<N1 extends number, N2 extends number> = {
    add: Add<N1, N2>,
    subtract: Subtract<N1, N2>,
    multiply: Multiply<N1, N2>,
    divide: Divide<N1, N2>,
    greaterThan: GT<N1, N2>,
    lessThan: LT<N1, N2>,
    equal: CheckEquality<N1, N2>
}

type A = Calculate<10, 2>