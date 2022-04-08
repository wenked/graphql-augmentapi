import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Augment {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  tier: string;

  @Field()
  pickrate: string;

  @Field()
  placement: string;

  @Field()
  top4: string;

  @Field()
  winrate: string;

  @Field()
  stage14: string;

  @Field()
  stage33: string;

  @Field()
  stage46: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
