export abstract class AbstractEntity {
  private id: String;
  private createdDate: Date;
  private modifiedDate: Date;
  public getId(): String {
    return this.id;
  }
  public setId(id: string) {
    this.id = id;
  }
  public getCreatedDate(): Date {
    return this.createdDate;
  }
  public getModifiedDate(): Date {
    return this.modifiedDate;
  }
  public setCreatedDate(createdDate: Date): void {
    this.createdDate = createdDate;
  }
  public setModifiedDate(modifiedDate: Date): void {
    this.modifiedDate = modifiedDate;
  }
}
