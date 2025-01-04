import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

export function AddTaskModal() {
  const form = useForm();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <FormField
            control={form.control}
            name="title"
            render={() => (
              <FormItem>
                <FormLabel />
                <FormControl>{/* Your form field */}</FormControl>
                <FormDescription />
              </FormItem>
            )}
          />

          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
