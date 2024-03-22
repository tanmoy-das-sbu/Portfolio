import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

export default function addevent() {
  return (
    <div>
      <div>
        <div className="w-full">
          <div className="mx-auto max-w-5xl grid gap-4 p-4 md:gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Add Event
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center ">
              <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" placeholder="Start Date" type="date" />
              </div>
              <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                <Label htmlFor="endDate">End Date</Label>
                <Input id="endDate" placeholder="End Date" type="date" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center ">
              <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                <Label htmlFor="startTime">Start Time</Label>
                <Input id="startTime" placeholder="Start Time" type="time" />
              </div>
              <div className="flex flex-col w-full md:w-1/2 gap-2 ">
                <Label htmlFor="endTime">End Time</Label>
                <Input id="endTime" placeholder="End Time" type="time" />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="heading">Heading</Label>
                <Input id="heading" placeholder="Heading" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="shortDescription">Short Description</Label>
                <Textarea
                  className="min-h-[150px]"
                  id="shortDescription"
                  placeholder="Short Description"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="img">Image</Label>
                <Input id="img" placeholder="Image" type="file" />
              </div>
              <div className="flex flex-row gap-4 ">
                <div className="flex flex-col gap-2 p-6">
                  <Label htmlFor="priority">Priority</Label>
                  <div className="flex items-center space-x-2">
                    <Switch id="priority" />
                    <Label htmlFor="priority">Priority</Label>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <Label htmlFor="visibility">Visibility</Label>
                  <div className="flex items-center space-x-2">
                    <Switch id="visibility" />
                    <Label htmlFor="visibility">Visibility</Label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Add Event</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
