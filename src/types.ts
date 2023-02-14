type ImageSource = {
    uri: string
};

export type RemoteAction = {
    id: string,
    icon: string | ImageSource,
    title: string,
    desc: string,
    callback: Function | null
};