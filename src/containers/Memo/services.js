export class MemoService {
  getMemos() {
    return [
      {
        id: 1,
        content:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        isMe: false,
      },
      {
        id: 2,
        content:
          'Various versions have evolved over the years, sometimes by accident, sometimes on purpose',
        isMe: false,
      },
      {
        id: 3,
        content:
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        isMe: false,
      },
    ];
  }
}
