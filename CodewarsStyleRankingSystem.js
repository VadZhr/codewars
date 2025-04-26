class User {
  static ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
  constructor(userRank = -8, userProgress = 0) {
    this.userRank = userRank;
    this.userProgress = userProgress;
  }

  get rank() {
    this.updateRank();

    return this.userRank;
  }

  get progress() {
    if (this.rank === 8) {
      this.userProgress = 0;
    }

    return this.userProgress;
  }

  incProgress(taskRank) {
    if (!User.ranks.includes(taskRank)) throw new Error("Incorrect task rank");

    const userRankIndex = User.ranks.indexOf(this.userRank);
    const taskRankIndex = User.ranks.indexOf(taskRank);
    const diffRanks = taskRankIndex - userRankIndex;

    if (diffRanks === -1) {
      this.userProgress += 1;
    } else if (diffRanks === 0) {
      this.userProgress += 3;
    } else {
      this.userProgress += 10 * diffRanks ** 2;
    }

    this.updateRank();
  }

  updateRank() {
    const levelUpPoints = Math.floor(this.userProgress / 100);
    const remainPoints = this.userProgress % 100;

    if (levelUpPoints) {
      this.userRank += levelUpPoints;

      if (this.userRank === 0) {
        this.userRank = 1;
      }

      this.userProgress = remainPoints;
    }

    if (this.userRank >= 8) {
      this.userRank = 8;
      this.userProgress = 0;

      return;
    }
  }
}

const user = new User();

console.log(user.rank);
console.log(user.incProgress(8));
console.log(user.rank);
console.log(user.progress);
