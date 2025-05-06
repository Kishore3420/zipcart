import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-4 m-4">
      <section>
        <Button variant="elevated">Default Button</Button>
      </section>
      <section>
        <Input placeholder="This is a mock input" />
      </section>
      <section>
        <Progress value={50} />
      </section>
      <section>
        <Progress value={70} />
      </section>
      <section>
        <Textarea placeholder="This is a test textarea" />
      </section>
      <section>
        <Checkbox />
      </section>
    </main>
  );
}
