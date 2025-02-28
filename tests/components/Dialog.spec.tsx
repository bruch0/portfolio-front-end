import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { Dialog } from "@/components/Dialog";

window.PointerEvent = MouseEvent as typeof PointerEvent;

describe("Dialog component", () => {
  it("Should render the trigger properly", async () => {
    render(
      <Dialog
        trigger={<button>Trigger</button>}
        title=""
        description=""
        cancelText=""
        confirmText=""
        confirmFunction={() => null}
      />
    );
    const dialogTrigger = screen.getByText("Trigger");

    expect(dialogTrigger).toBeDefined();
  });

  it("When pressed, the trigger should pop up the dialog", async () => {
    render(
      <Dialog
        trigger={<button>Trigger</button>}
        title="Title Test"
        description=""
        cancelText=""
        confirmText=""
        confirmFunction={() => null}
      />
    );
    const dialogTrigger = screen.getByText("Trigger");
    fireEvent.click(dialogTrigger);

    const title = screen.getByText("Title Test");

    expect(title).toBeDefined();
  });

  it("The dialog title should be correct", async () => {
    render(
      <Dialog
        trigger={<button>Trigger</button>}
        title="Title"
        description=""
        cancelText=""
        confirmText=""
        confirmFunction={() => null}
      />
    );
    const dialogTrigger = screen.getByText("Trigger");
    fireEvent.click(dialogTrigger);

    const title = screen.getByText("Title");

    expect(title).toBeDefined();
  });

  it("The dialog description should be correct", async () => {
    render(
      <Dialog
        trigger={<button>Trigger</button>}
        title=""
        description="Description"
        cancelText=""
        confirmText=""
        confirmFunction={() => null}
      />
    );
    const dialogTrigger = screen.getByText("Trigger");
    fireEvent.click(dialogTrigger);

    const description = screen.getByText("Description");

    expect(description).toBeDefined();
  });

  it("The dialog cancelText should be correct", async () => {
    render(
      <Dialog
        trigger={<button>Trigger</button>}
        title=""
        description=""
        cancelText="cancelText"
        confirmText=""
        confirmFunction={() => null}
      />
    );
    const dialogTrigger = screen.getByText("Trigger");
    fireEvent.click(dialogTrigger);

    const cancelButton = screen.getByText("cancelText");

    expect(cancelButton).toBeDefined();
  });

  it("The dialog confirmText should be correct", async () => {
    render(
      <Dialog
        trigger={<button>Trigger</button>}
        title=""
        description=""
        cancelText=""
        confirmText="confirmText"
        confirmFunction={() => null}
      />
    );
    const dialogTrigger = screen.getByText("Trigger");
    fireEvent.click(dialogTrigger);

    const confirmButton = screen.getByText("confirmText");

    expect(confirmButton).toBeDefined();
  });

  it("The dialog confirmFunction must be called once the confirm button is clicked", async () => {
    const mocked = jest.fn();

    render(
      <Dialog
        trigger={<button>Trigger</button>}
        title=""
        description=""
        cancelText=""
        confirmText="confirmText"
        confirmFunction={mocked}
      />
    );
    const dialogTrigger = screen.getByText("Trigger");
    fireEvent.click(dialogTrigger);

    const confirmButton = screen.getByText("confirmText");
    fireEvent.click(confirmButton);

    expect(mocked).toHaveBeenCalled();
  });

  it("The dialog should disappear if cancel button is clicked", async () => {
    const mocked = jest.fn();

    render(
      <Dialog
        trigger={<button>Trigger</button>}
        title=""
        description="description"
        cancelText="cancelText"
        confirmText=""
        confirmFunction={mocked}
      />
    );
    const dialogTrigger = screen.getByText("Trigger");
    fireEvent.click(dialogTrigger);

    const cancelButton = screen.getByText("cancelText");
    fireEvent.click(cancelButton);

    const description = screen.queryByText("description");

    expect(mocked).toHaveBeenCalledTimes(0);
    expect(description).toBe(null);
  });
});
