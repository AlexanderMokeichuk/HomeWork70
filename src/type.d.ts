export interface ContactInForm {
  name: string,
  phoneNumber: string,
  email: string,
  photo: string,
}
export interface ContactInApi {
  [id: string]: ContactInForm,
}

export interface Contact extends ContactInForm{
  id: string,
}

