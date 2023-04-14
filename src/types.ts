export type User = {
  name: UserName;
  email: string;
  picture: string;
  location: UserLocation;
  uuid: string;
};

export type UserName = {
  title: UserTitle;
  first: string;
  last: string;
};

export type UserLocation = {
  country: string;
  city: string;
  street: { name: string; number: string };
};

export type SearchUserBy = {
  searchBy: string;
  value: String;
};
export enum UserTitle {
  Mrs = "Mrs",
  Mr = " Mr",
  Ms = "Ms",
  Madame = "Madame",
  Mademoiselle = "Mademoiselle",
  empty = "Title",
}
