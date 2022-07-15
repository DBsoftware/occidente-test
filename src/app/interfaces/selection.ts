export interface Iselection{
  icon: string,
  title: string,
}

export interface Ioptions {
  title: string
  help: string
  items: Array<Iselection>|null
}
