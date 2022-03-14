import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitWhereUniqueInput } from './visit-where-unique.input';
import { VisitUpdateWithoutVisitedInput } from './visit-update-without-visited.input';

@InputType()
export class VisitUpdateWithWhereUniqueWithoutVisitedInput {

    @Field(() => VisitWhereUniqueInput, {nullable:false})
    where!: VisitWhereUniqueInput;

    @Field(() => VisitUpdateWithoutVisitedInput, {nullable:false})
    data!: VisitUpdateWithoutVisitedInput;
}
